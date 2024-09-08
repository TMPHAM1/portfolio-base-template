"use client"
import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'

import {FormProps} from '../../../types'

type DynamicFormProps = {
    form: FormProps;
}
export const DynamicForm = ({ form } : DynamicFormProps) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form.headers);
    const headers: any = {};
    form.headers.forEach(headerItem => {
        headers[headerItem.key] = headerItem.value}
    )
    try {
        
      const response: any = await fetch(form.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((response)=> response.json());

      if (response.ok) {
        toast.success('Form submitted successfully!', {position: "top-center"});
      } else {
        console.log(response)
    
        toast.error(response.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="bg-white relative shadow-2xl rounded px-4 lg:px-8 pt-6 pb-6 mb-4 w-full">
      {/* <h1 className="text-2xl text-center mb-2">{form.title}</h1> */}
      {/* <p className="font-semibold mb-4">{form.description}</p> */}
      {form.fields.map((field, index) => {
        if (field._type === 'textField') {
          return (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          );
        } else if (field._type === 'textareaField') {
          return (
            <div key={index}>
              <label className="block text-gray-700 text-sm font-bold mb-2">{field.label}</label>
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                rows={field.rows}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          );
        } else if (field._type === 'checkboxField') {
          return (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  name={field.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [field.name]: e.target.checked,
                    })
                  }
                />
                {field.label}
              </label>
            </div>
          );
        }
        return null;
      })}
      <div className="flex justify-end">
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline custom-gradient mt-7">Submit</button>
      </div>
    </form>
  );
};


