"use client";
import React, { useState } from "react";
import Heading from "../../utils/Heading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createClient,SupabaseClient } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from "@/components/ui/button";
import Input from "../../../components/input/index";
import InputRadio from "../../../components/inputRadio/index";
import InputSelect from "../../../components/inputSelect/index";
import InputFile from "../../../components/inputFile/index";
import Loader from "@/app/components/Loader/Loader";
interface SupabaseConfig {
    supabaseUrl: string;
    supabaseKey: string;
  }


  
const createSupabaseClient = ({ supabaseUrl, supabaseKey }: SupabaseConfig): SupabaseClient => {
    return createClient(supabaseUrl, supabaseKey);
  };

type Props = {};

const Page = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(4);
  const [route, setRoute] = useState("Login");
  const router=useRouter();
  const [isLoading,setIsLoading]=useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const supabase = createSupabaseClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  });
  const validationSchema = Yup.object({
    name: Yup.string()
    .max(25, 'Must be 25 characters or less')
    .required('Required'),
    
  email: Yup.string().email('Invalid email address').required('Required'),
    whatsappNumber: Yup.string()
    .matches(/^[0-9]{10}$/, '10 digit mobile number should be entered')
    .required('Required'),
      gender: Yup.string().required('Required'),
      course:Yup.string().required(" Required"),
      branch: Yup.string().required('Required'),  
      college: Yup.string().required('Required'),
      collegeAddress: Yup.string().required('Required'),
      techStack: Yup.string().required("Required"),
      resume: Yup.mixed()
      .required('Resume is required'),
  
     
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      whatsappNumber:'',
      email: '',
      gender:'',
      year:'',
      resume:null,
      course:'',
      branch:'',
      college:'',
      collegeAddress:'',
      state:'',
      district:'',
      techStack:'',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true)
      try {
        console.log(values)
        const { data, error } = await supabase
          .from('form') 
          .insert([
            {
              name: values.name,
              email:values.email,
              number:values.whatsappNumber,
              course:values.course,
              gender:values.gender,
              year:values.year,
              branch:values.branch,
              techStack:values.techStack,
              college:values.college,
              collegeAddress:values.collegeAddress,
              state:values.state,
              district:values.district,
              
            },
          ]);
    
        if (error) {
          console.error('Error inserting data:', error);
        } else {
          console.log('Data inserted successfully:', data);
          setIsLoading(false)
          router.push('/succesfull')
        }
      } catch (error) {
        console.error('An error occurred:', error);
        router.push('/notsubmitted')
      }
    },
    
    
  });
 const yearOptions=[
  {
    label:'1',value:'1'},
    {label:'2',value:'2'},
    {label:'3',value:'3'},
    {label:'4',value:'4'},
 ]
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    {label: 'Other', value: "other"},
  ];
  const courseOptions = [
    { label: 'B. Tech', value: 'btech' },
    { label: 'Bca', value: 'bca' },
    {label: 'Mca', value: "mca"},
    {label: 'Other', value: "other"},
  ];
  
  const branchOptions = [
    {label: 'Select Branch', value: 'select'},
    { label: 'BCA/MCA', value: 'bca_mca' },
    { label: 'CSE', value: 'cse' },
    { label: 'CS', value: 'cs' },
    { label: 'IT', value: 'it' },
    { label: 'CSIT', value: 'csit' },
    { label: 'CSAI', value: 'csai' },
    { label: 'CSE (AI/ML)', value: 'cseaiml' },
    { label: 'ECE', value: 'ece' },
    { label: 'ME', value: 'me' },
    { label: 'EEE', value: 'eee' },
  ];
  const stateOptions = [
    { label: "Andhra Pradesh", value: "AP" },
    { label: "Arunachal Pradesh", value: "AR" },
    // Add more states in the same format
    { label: "Assam", value: "AS" },
    { label: "Bihar", value: "BR" },
    { label: "Chhattisgarh", value: "CG" },
    { label: "Goa", value: "GA" },
    { label: "Gujarat", value: "GJ" },
    { label: "Haryana", value: "HR" },
    { label: "Himachal Pradesh", value: "HP" },
    { label: "Jharkhand", value: "JH" },
    { label: "Karnataka", value: "KA" },
    { label: "Kerala", value: "KL" },
    { label: "Madhya Pradesh", value: "MP" },
    { label: "Maharashtra", value: "MH" },
    { label: "Manipur", value: "MN" },
    { label: "Meghalaya", value: "ML" },
    { label: "Mizoram", value: "MZ" },
    { label: "Nagaland", value: "NL" },
    { label: "Odisha", value: "OR" },
    { label: "Punjab", value: "PB" },
    { label: "Rajasthan", value: "RJ" },
    { label: "Sikkim", value: "SK" },
    { label: "Tamil Nadu", value: "TN" },
    { label: "Telangana", value: "TG" },
    { label: "Tripura", value: "TR" },
    { label: "Uttar Pradesh", value: "UP" },
    { label: "Uttarakhand", value: "UT" },
    { label: "West Bengal", value: "WB" },
    { label: "Andaman and Nicobar Islands", value: "AN" },
    { label: "Chandigarh", value: "CH" },
    { label: "Dadra and Nagar Haveli and Daman and Diu", value: "DN" },
    { label: "Delhi", value: "DL" },
    { label: "Lakshadweep", value: "LD" },
    { label: "Puducherry", value: "PY" }
];

  
  return (
    <>
    {isLoading ? <Loader /> :
  
    <div className="">
      <Heading
        title=" Join SpringBee - Apply for a Rewarding Career Opportunity"
        description="Complete the career form to apply for a position at SpringBee and take the first step towards a fulfilling career in IT consultancy. Tell us about your skills, experience, and aspirations, and let's explore how you can contribute to our dynamic team."
        keywords=" Career application, job application form, IT consultancy careers, apply for a job, career opportunities, IT professionals, SpringBee team, skills and experience"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <br />

    
    <div className="isolate bg-white dark:bg-hsl-custom px-6 py-12 sm:py-16 lg:px-8">
      
      <div className="mx-auto max-w-2xl dark:text-white text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white  sm:text-4xl">Apply Now </h2>
        <p className="mt-2 text-lg leading-8 dark:text-white  text-gray-600">
        Take the next step in advancing your career by applying now. Join our dynamic team and be part of our mission to drive digital innovation forward.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}  className="mx-auto mt-8 max-w-xl sm:mt-6">
        <div className="grid  dark:text-white grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <Input value="name" label="Name" placeHolder="John Doe" formikTouched={formik.touched.name} formikError={formik.errors.name} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text" />

        <Input value="email" label="Email" placeHolder="doe@gmail.com" formikTouched={formik.touched.email} formikError={formik.errors.email} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="text" />

        <Input value="whatsappNumber" label="Whatsapp Number" placeHolder="8088088088" formikTouched={formik.touched.whatsappNumber} formikError={formik.errors.whatsappNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.whatsappNumber} type="tel"/>
        <Input value="course" label="Course" placeHolder="Bachelor Of Technology" formikTouched={formik.touched.course} formikError={formik.errors.course} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.course} type="text" />
           
        <InputRadio value="gender" label="Gender" options={genderOptions} formikTouched={formik.touched.gender} formikError={formik.errors.gender} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
          
        <InputRadio value="year" label="Current Year" options={yearOptions} formikTouched={formik.touched.year} formikError={formik.errors.year} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
     
           
        <div className="sm:col-span-2">
           <InputSelect value="branch" label="Select your Branch" options={branchOptions} formikTouched={formik.touched.branch} formikError={formik.errors.branch} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
     </div>
     
     <div className="sm:col-span-2">
           <InputFile placeHolder="" value="resume" label=" Attach Resume" formik={formik} formikTouched={formik.touched.resume} formikError={formik.errors.resume} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.resume} />
</div>
<div className="sm:col-span-2">
          <Input value="techStack" label="Tech Stack" placeHolder="MERN" formikTouched={formik.touched.techStack} formikError={formik.errors.techStack} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.techStack} type="text" />
          </div>
          <div className="sm:col-span-2">
          <Input value="college" label="College" placeHolder="Hindu College" formikTouched={formik.touched.college} formikError={formik.errors.college} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.college} type="text" />
          </div>
          <div className="sm:col-span-2">
          
          <Input value="collegeAddress" label="College Address" placeHolder="Mall Road, Sudhir Bose Marg, Maurice Nagar, Delhi - 110007 (North Campus, University Enclave)" formikTouched={formik.touched.collegeAddress} formikError={formik.errors.collegeAddress} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.collegeAddress} type="text" />
         
          </div>
          
          <div className="sm:col-span-2">
           <InputSelect value="state" label="Select your State" options={stateOptions} formikTouched={formik.touched.state} formikError={formik.errors.state} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
     </div>
     <div className="sm:col-span-2">
          <Input value="district" label="District" placeHolder="Nehru Nagar" formikTouched={formik.touched.district} formikError={formik.errors.district} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.district} type="text" />
          </div>
          

          
         
        </div>
        <div className="mt-10">

          <Button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
 

      <Footer />
    </div>
}
</>
  );
};

export default Page;
