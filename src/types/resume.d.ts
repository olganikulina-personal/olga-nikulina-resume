declare module "*.json" {
  const value: {
    personalInfo: {
      name: string;
      title: string;
      location: string;
      about: string;
    };
    skills: string[];
    skillColors: string[];
    experience: Array<{
      company: string;
      role: string;
      period: string;
    }>;
    education: Array<{
      school: string;
      degree: string;
      details?: string;
      period: string;
    }>;
    outsideWork: string;
  };
  export default value;
}
