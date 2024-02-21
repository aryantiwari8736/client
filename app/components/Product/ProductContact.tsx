import React, { useState } from "react";
import {
  CircularProgress,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
type Props = {};
interface SupabaseConfig {
  supabaseUrl: string;
  supabaseKey: string;
}

const createSupabaseClient = ({
  supabaseUrl,
  supabaseKey,
}: SupabaseConfig): SupabaseClient => {
  return createClient(supabaseUrl, supabaseKey);
};
const ProductContact = (props: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const supabase = createSupabaseClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  });
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(25, "Must be 25 characters or less")
      .required("Required"),

    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      onOpen();
      const newId = Math.floor(Math.random() * 99999999);
      console.log(newId, typeof newId);
      try {
        console.log(values);
        const { data, error } = await supabase.from("productform").insert([
          {
            id: newId,
            name: values.name,
            email: values.email,
            message: values.message,
          },
        ]);

        if (error) {
          console.error("Error inserting data:", error);
        } else {
          console.log("Data inserted successfully:", data);
          setFormSubmitted(true);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        router.push("/notsubmitted");
      }
    },
  });
  return (
    <>
      <section id="contact">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="flex max-w-2xl flex-col items-start">
              <h2 className="mb-6 text-3xl font-bold md:text-5xl">
                Let{`'`}s build something exciting together!
              </h2>

              <p className="mb-8 max-w-lg text-[#647084]">
                Join forces with our expert team to bring your vision to life.
                Together, we{`'`}ll craft innovative solutions that exceed
                expectations and inspire success. Get ready to embark on an
                exciting journey of collaboration and achievement!
              </p>
            </div>

            <div className="mx-auto max-w-xl bg-[#f2f2f7] p-8 text-center">
              <h3 className="text-2xl dark:text-[#1e1d1d] font-bold md:text-3xl">
                Get a Call{" "}
              </h3>
              <p className="mx-auto mb-6 mt-4 max-w-md text-sm text-[#647084]">
                Receive personalized assistance by scheduling a call with our
                team. Let us understand your needs better and explore how we can
                help you achieve your goals.{" "}
              </p>

              <form
                className="mx-auto mb-4 max-w-sm text-left"
                onSubmit={formik.handleSubmit}
              >
                <div className="mb-4 flex flex-col gap-y-2">
                  <label
                    htmlFor="name-2"
                    className="mb-1 dark:text-[#1e1d1d] font-medium"
                  >
                    Your Name
                    {formik.touched.name && formik.errors.name ? (
                      <span className=" text-xs text-red-500 mb-.5">{`(${formik.errors.name}*)`}</span>
                    ) : null}
                  </label>
                  <input
                    type="text"
                    id="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    className="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333]"
                    placeholder=""
                  />
                </div>
                <div className="mb-4 flex flex-col gap-y-2">
                  <label
                    htmlFor="name-2"
                    className="mb-1 dark:text-[#1e1d1d]  font-medium"
                  >
                    Email Address{formik.touched.email && formik.errors.email ? (
                        <span className=" text-xs text-red-500 mb-.5">{`(${formik.errors.email}*)`}</span>
                      ) : null}
                  </label>
                  <input
                    type="text"
                    className="h-9 w-full bg-white px-3 py-6 text-sm text-[#333333]"
                    id="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="johndoe@example.com"
                  />
                </div>
                <div className="mb-8 flex flex-col gap-y-2">
                  <label
                    htmlFor="field-3"
                    className="mb-1 dark:text-[#1e1d1d]  font-medium"
                  >
                    Project Brief{formik.touched.message && formik.errors.message ? (
                        <span className=" text-xs text-red-500 mb-.5">{`(${formik.errors.message}*)`}</span>
                      ) : null}
                  </label>
                  <textarea
                  id="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                    placeholder=""
                    className="h-auto min-h-[186px] w-full overflow-auto bg-white px-3 py-2 text-sm text-[#333333]"
                  >
                    {" "}
                  </textarea>
                </div>
                <button
                  type="submit"
                  className="inline-block w-full cursor-pointer bg-[#276ef1] px-6 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
                >Get free quote</button>
                 <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="mx-auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Message Sent Status</ModalHeader>
              <ModalBody>
                {!formSubmitted?<CircularProgress size="lg" aria-label="Loading..." label="Sending sent"/>:<><CircularProgress
      label="Succesfully Sent see you soon"
      size="lg"
      value={100}
      color="success"
      
      showValueLabel={true}
    /></>
    }
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductContact;
