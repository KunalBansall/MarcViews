export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  industry: string;
  companyName: string;
  companySize?: number;
  companyWebsite: string;
  address: string;
  country: string;
  inquiry: string;
  inquiryType: string;
  budget?: number;
  timeframe?: string;
  howDidYouHear: string;
  signUpForUpdates: boolean;
  userId?: string;
}

export default {
  async submitContact(formData: ContactFormData): Promise<{ success: boolean }> {
    // In a real app, you would make an API call here
    console.log('Form submitted:', formData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
  }
};
