import { Button, TextInput } from "@mantine/core";

const buttonStyles = {
    backgroundColor: '#fabe25', // Primary background color
    color: '#2d2d2d', // Text color
    border: 'none', // Remove default border
    borderRadius: '4px', // Rounded corners
    padding: '10px 20px', // Padding inside the button
    cursor: 'pointer', // Pointer cursor on hover
    transition: 'background-color 0.3s ease', // Smooth transition
    fontWeight: 'bold', // Bold text
  };
const Subscribe=()=>{
   return <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl 
   justify-around">
      <div className="text-4xl  w-2/5 text-center font-semibold mb-3 text-mine-shaft-100">Never wants to miss Any 
      <span className="text-bright-sun-400">Job news?</span></div>
      <div className="flex gap-4  rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
      <TextInput
      className="[&_input]:text-mine-shaft-100 font-semibold"
      variant="unstyled"
      placeholder="Your@email.com"
      size="xl"
    />
    <Button className="!rounded-lg" size="lg" style={buttonStyles} color="brightSun.4" variant="filled">Subscribe</Button>
      </div>
   </div>
}
export default Subscribe;