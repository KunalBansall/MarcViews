interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  inquiry: string;
  signUpForUpdates: boolean;
}

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message: string;
}

interface PartnerFormData {
  name: string;
  email: string;
  company: string;
  servicesInterested: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: any;
}

class FormService {
  private apiBaseUrl = '/api';

  private async makeRequest<T>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await fetch(`${this.apiBaseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Request failed');
      }

      return response.json();
    } catch (error) {
      console.error(`API request to ${endpoint} failed:`, error);
      throw error;
    }
  }

  async submitContactForm(data: ContactFormData): Promise<ApiResponse> {
    try {
      const response = await this.makeRequest<ApiResponse>('/contact/general', data);
      return {
        success: true,
        message: 'Your message has been sent successfully!',
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      };
    }
  }

  async submitAppointmentForm(data: AppointmentFormData): Promise<ApiResponse> {
    try {
      const response = await this.makeRequest<ApiResponse>('/contact/appointment', data);
      return {
        success: true,
        message: 'Your appointment request has been submitted successfully!',
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit appointment. Please try again.',
      };
    }
  }

  async submitPartnerForm(data: PartnerFormData): Promise<ApiResponse> {
    try {
      const response = await this.makeRequest<ApiResponse>('/contact/partner', data);
      return {
        success: true,
        message: 'Your partnership application has been submitted successfully!',
        data: response,
      };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit partnership application. Please try again.',
      };
    }
  }
}

export const formService = new FormService();
