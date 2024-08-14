import { useEffect, useState } from "react";
import { Button, Divider, FileInput, LoadingOverlay, NumberInput, Textarea, TextInput, Notification } from "@mantine/core";
import { IconPaperclip, IconCheck } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const ApplyJobComp = () => {
    const [formValues, setFormValues] = useState({
        full_name: '',         // Updated field name
        email: '',             // Updated field name
        phone_number: '',      // Updated field name
        personal_website: '',  // Updated field name
        cv: null as File | null,
        cover_letter: '',      // Updated field name
    });
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        let countdown: NodeJS.Timeout | null = null;

        if (submit) {
            countdown = setInterval(() => {
                setSec(prevSec => {
                    if (prevSec <= 1) {
                        clearInterval(countdown!);
                        navigate('/find-jobs');
                    }
                    return prevSec - 1;
                });
            }, 1000);
        }

        return () => {
            if (countdown) {
                clearInterval(countdown);
            }
        };
    }, [submit, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
        const { name, type, files } = e.target;
        setFormValues(prevValues => ({
          ...prevValues,
          [name]: type === 'file' ? (files ? files[0] : null) : e.target.value
        }));
      };
      

    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async () => {
        setSubmit(true);
      
        const formData = new FormData();
        for (const [key, value] of Object.entries(formValues)) {
          if (value instanceof File) {
            formData.append(key, value);
          } else if (value) {
            formData.append(key, value as string);
          }
        }
      
        try {
          const response = await fetch('http://localhost:8000/submit/', {
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Application submitted successfully:', data);
          } else {
            // Extract and log error messages
            const errorData = await response.json();
            console.error('Submission failed:', errorData);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      


    return (
        <>
            <div className="w-2/3 mx-auto">
                <LoadingOverlay
                    className="!fixed"
                    visible={submit}
                    zIndex={1000}
                    overlayProps={{ radius: 'sm', blur: 2 }}
                    loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
                />
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className="h-14" src={`/Icons/Google.png`} alt="Google" />
                        </div>
                        <div>
                            <div className="font-semibold text-2xl">Software Engineer III</div>
                            <div className="text-lg text-mine-shaft-300">Google &#x2022; 3 days ago &#x2022; 48 Applicants</div>
                        </div>
                    </div>
                </div>
                <Divider my="xl" />
                <div className="text-xl font-semibold mb-5">Submit Your Application</div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <TextInput
                            name="full_name"
                            value={formValues.full_name}
                            onChange={handleChange}
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                            label="Full Name"
                            withAsterisk
                            placeholder="Enter name"
                        />
                        <TextInput
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                            label="Email"
                            withAsterisk
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="flex gap-10 [&>*]:w-1/2">
                        <NumberInput
                            name="phone_number"
                            value={formValues.phone_number}
                            onChange={(value) => setFormValues(prevValues => ({ ...prevValues, phone_number: value?.toString() || '' }))}
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                            label="Phone Number"
                            withAsterisk
                            placeholder="Enter phone number"
                            min={0}
                            max={9999999999}
                            clampBehavior="strict"
                            hideControls
                        />
                        <TextInput
                            name="personal_website"
                            value={formValues.personal_website}
                            onChange={handleChange}
                            readOnly={preview}
                            variant={preview ? "unstyled" : "default"}
                            className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                            label="Personal website"
                            withAsterisk
                            placeholder="Enter URL"
                        />
                    </div>
                    <FileInput
                        name="cv"
                        onChange={handleChange}
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                        withAsterisk
                        leftSection={<IconPaperclip stroke={1.5} />}
                        label="Attach your CV"
                        placeholder="Your CV"
                    />

                    <Textarea
                        name="cover_letter"
                        value={formValues.cover_letter}
                        onChange={handleChange}
                        readOnly={preview}
                        variant={preview ? "unstyled" : "default"}
                        className={`${preview ? "text-mine-shaft-300 font-semibold" : ""}`}
                        withAsterisk
                        placeholder="Type something about yourself..."
                        label="Cover-letter"
                        autosize
                        minRows={4}
                    />
                    {!preview && <Button onClick={handlePreview} color="bright-sun.4" variant="light">Preview</Button>}
                    {preview && (
                        <div className="flex gap-10 [&>*]:w-1/2">
                            <Button fullWidth onClick={handlePreview} color="bright-sun.4" variant="outline">Edit</Button>
                            <Button fullWidth onClick={handleSubmit} color="bright-sun.4" variant="light">Submit</Button>
                        </div>
                    )}
                </div>
            </div>
            <Notification
                className={`!border-bright-sun-400 -translate-y-20 !fixed top-0 left-[35%] transition duration-300 ease-in-out z-[1001] ${submit ? "translate-y-0" : "-translate-y-20"}`}
                icon={<IconCheck style={{ width: '20px', height: '20px' }} />}
                color="teal"
                withBorder
                title="Application Submitted!"
                mt="md"
                withCloseButton={false}
                aria-live="assertive"
            >
                Redirecting to Find Jobs in {sec} seconds...
            </Notification>
        </>
    );
};

export default ApplyJobComp;
