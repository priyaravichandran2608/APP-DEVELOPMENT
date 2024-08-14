import { useState } from "react";
import { Button, TagsInput } from "@mantine/core";
import fields from "../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./texteditor"; // Import the TextEditor component
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

interface FormValues {
  field1: string;
  field2: string;
  field3: string; // Additional fields
  field4: string; // Additional fields
  field5: string; // Additional fields
  field6: string; // Additional fields
  skills: string[];
  job_description: string; // Changed to match Django model field name
}

const PostJob = () => {
  const select = fields;
  const [formValues, setFormValues] = useState<FormValues>({
    field1: '',
    field2: '',
    field3: '', // Initialize additional fields
    field4: '', // Initialize additional fields
    field5: '', // Initialize additional fields
    field6: '', // Initialize additional fields
    skills: [],
    job_description: '', // Changed to match Django model field name
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleEditorChange = (content: string) => {
    setFormValues(prevValues => ({
      ...prevValues,
      job_description: content // Changed to match Django model field name
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = async () => {
    console.log('Form Values Before Submission:', formValues); // Log form values to check content
    try {
      const response = await fetch('http://localhost:8000/postjob/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Job posted successfully:', data);
        navigate('/homeafterlogin')
      } else {
        console.error('Submission failed:', data);
        navigate('/homeafterlogin')
      }
    } catch (error) {
      navigate('/homeafterlogin')
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold mb-5">Post a Job</div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput
              name="field1"
              value={formValues.field1}
              onChange={handleChange}
              {...select[0]}
            />
            <SelectInput
              name="field2"
              value={formValues.field2}
              onChange={handleChange}
              {...select[1]}
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput
              name="field3"
              value={formValues.field3}
              onChange={handleChange}
              {...select[2]}
            />
            <SelectInput
              name="field4"
              value={formValues.field4}
              onChange={handleChange}
              {...select[3]}
            />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput
              name="field5"
              value={formValues.field5}
              onChange={handleChange}
              {...select[4]}
            />
            <SelectInput
              name="field6"
              value={formValues.field6}
              onChange={handleChange}
              {...select[5]}
            />
          </div>
          <TagsInput
            withAsterisk
            label="Skills"
            placeholder="Enter skill"
            clearable
            acceptValueOnBlur
            splitChars={[',', ' ', '|']}
            value={formValues.skills}
            onChange={(value: string[]) => setFormValues(prevValues => ({ ...prevValues, skills: value }))}
          />
          <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/20">
            <div className="text-sm font-medium">Job Description</div>
            <TextEditor onChange={handleEditorChange} />
          </div>
          <div className="flex gap-4">
            <Button color="bright-sun.4" variant="light" onClick={handleSubmit}>Publish Job</Button>
            <Button color="bright-sun.4" variant="outline">Save as Draft</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
