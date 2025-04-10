/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Space,
  message,
  Upload,
  Pagination,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../../redux/features/admin/eventManagementApi";
import { TEvent } from "../../types";

const EventsManagement = () => {
  const [page, setPage] = useState(1);
  const {
    data: events,
    isLoading,
    refetch,
  } = useGetAllProductsQuery([
    { name: "limit", value: 8 },
    { name: "page", value: page },
    { name: "sort", value: "id" },
  ]);
  const [addEvent] = useAddProductMutation();
  const [updateEvent] = useUpdateProductMutation();
  const [deleteEvent] = useDeleteProductMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<TEvent | null>(null);
  const [form] = Form.useForm();

  const metaData = events?.meta;
  const tableData = events?.data?.map((event) => ({
    key: event._id,
    ...event,
  }));

  const showModal = (event?: TEvent) => {
    setEditingEvent(event || null);
    form.setFieldsValue(
      event
        ? {
            ...event,
            eventImg: event.eventImg
              ? [
                  {
                    uid: "-1",
                    name: "Existing Image",
                    status: "done",
                    url: event.eventImg,
                  },
                ]
              : [],
          }
        : {
            name: "",
            eventHost: "",
            description: "",
            eventImg: [],
          }
    );
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleSubmit = async (values: any) => {
    try {
      const eventData = {
        name: values.name,
        eventHost: values.eventHost,
        description: values.description,
        eventImg: editingEvent?.eventImg || "",
      };

      const formData = new FormData();
      formData.append("data", JSON.stringify(eventData));

      if (values.eventImg && values.eventImg[0]?.originFileObj) {
        formData.append("file", values.eventImg[0].originFileObj);
      } else if (!editingEvent?.eventImg) {
        formData.append("file", "");
      }

      if (editingEvent) {
        await updateEvent({ id: editingEvent._id, ...eventData }).unwrap();
        message.success("Event updated successfully!");
      } else {
        await addEvent(formData).unwrap();
        message.success("Event added successfully!");
      }

      handleCancel();
      refetch();
    } catch (error) {
      message.error("Operation failed");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteEvent(id).unwrap();
      message.success("Event deleted successfully!");
      refetch();
    } catch (error) {
      message.error("Failed to delete event");
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "EventHost", dataIndex: "eventHost", key: "eventHost" },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Update",
      key: "update",
      render: (record: TEvent) => (
        <Space>
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
        </Space>
      ),
    },
    {
      title: "Delete",
      key: "delete",
      render: (record: TEvent) => (
        <Space>
          <Button type="link" danger onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div style={{ padding: 20 }}>
        <Button
          color="default"
          variant="solid"
          onClick={() => showModal()}
          style={{ marginBottom: 16 }}
        >
          Add Event
        </Button>
        <Table
          columns={columns}
          dataSource={tableData || []}
          loading={isLoading}
          rowKey="_id"
          pagination={false}
        />
        <Modal
          title={editingEvent ? "Edit Event" : "Add Event"}
          open={isModalOpen}
          onCancel={handleCancel}
          onOk={() => form.submit()}
        >
          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="name"
              label="Event Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="eventHost"
              label="Event Host"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[{ required: true }]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name="eventImg"
              label="Event Image"
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            >
              <Upload
                beforeUpload={() => false}
                listType="picture"
                maxCount={1}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <Pagination
        onChange={(value) => setPage(value)}
        pageSize={metaData?.limit}
        total={metaData?.total}
      />
    </>
  );
};

export default EventsManagement;