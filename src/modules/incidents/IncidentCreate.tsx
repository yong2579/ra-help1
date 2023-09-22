import {
  Create,
  SimpleForm,
  TextInput,
} from "react-admin";

const IncidentCreate = () => {
  return (
    <Create>
      <SimpleForm
        defaultValues={{
          title: "testing default value",
        }}
      >
            <TextInput source="title" isRequired fullWidth />
            <TextInput source="description" isRequired fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default IncidentCreate;
