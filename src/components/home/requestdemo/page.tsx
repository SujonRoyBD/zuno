"use client";

import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// 1. Define Zod schema
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().optional(),
  jobTitle: z.string().optional(),
  workEmail: z.string().email("Invalid email"),
  phoneNumber: z.string().min(5, "Phone number is required"),
  hearAboutUs: z.string().min(1, "Please select an option"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RequestDem: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      jobTitle: "",
      workEmail: "",
      phoneNumber: "",
      hearAboutUs: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log("Form Submitted:", values);
  }

  return (
    <div className="container">
      <div className="flex justify-center items-center flex-col">
        <button className="bg-[#1313130f] px-5 py-2 rounded-full">
          Get Started with Zuno
        </button>
        <p className="font-bold text-4xl py-2">Request Demo</p>
      </div>

      <div className="flex gap-6 flex-col md:flex-row">
        {/* Left Section */}
        <div
          className="w-full md:w-2/4 h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center relative px-9 py-[300px] rounded-3xl"
          style={{ backgroundImage: `url('/assets/requestdemo.webp')` }}
        >
          <div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/assets/65adb4670c47e19909808ad0_Star-rating-yellow.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
            </div>
            <p className="font-bold text-3xl text-white mt-4">Exactly what I needed</p>
            <p className="text-white mt-2">
              Zuno helped me break the cycle of stress and burnout. I’ve tried countless wellness apps, but this one actually listens. The AI check-ins feel personal and the sleep support made a real difference.
            </p>
            <div className="flex gap-4 py-8 text-white">
              <Image src="/assets/head (2).png" alt="head" width={50} height={50} className="rounded-full" />
              <div>
                <p className="font-bold text-lg">Amanda C.</p>
                <p>UX Designer, San Francisco</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/4 bg-white shadow p-6 rounded-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>

              <FormField
                control={form.control}
                name="workEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Work Email*</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number*</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 5555" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="hearAboutUs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Industry*</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="friend">Friend</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Write your message..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Lets Talk</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RequestDem;