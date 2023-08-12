"use client"

import React, { createContext, useContext, useState } from 'react';

interface FormData {
  // Define the properties of your form data
  days: number | undefined;
  months: number | undefined;
  years: number | undefined;
  // Add other properties as needed
}

interface FormDataContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(undefined);

export function FormDataProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    days: undefined,
    months: undefined,
    years: undefined
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
}
