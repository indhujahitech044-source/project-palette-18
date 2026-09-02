export type ProjectStatus = "Published" | "Ongoing" | "Complete";

export type Project = {
  id: number;
  name: string;
  amount: string;
  status: ProjectStatus;
  approaches: number;
  posted: string;
  duration?: string;
  completion?: string;
  involved?: number;
  rating?: number;
};

export const projects: Project[] = [
  { id: 1, name: "Finale Mobile App", amount: "$12,000", status: "Published", approaches: 7, posted: "Mar 02, 2025" },
  { id: 2, name: "Nova E-commerce Store", amount: "$8,500", status: "Ongoing", approaches: 4, posted: "Mar 05, 2025", involved: 4, duration: "4 weeks" },
  { id: 3, name: "Orbit CRM Dashboard", amount: "$15,200", status: "Published", approaches: 9, posted: "Mar 09, 2025" },
  { id: 4, name: "Lumen Analytics Portal", amount: "$9,800", status: "Complete", approaches: 6, posted: "Mar 12, 2025", duration: "3 weeks", completion: "Mar 14, 2025", rating: 5 },
  { id: 5, name: "Pulse Booking System", amount: "$6,400", status: "Ongoing", approaches: 3, posted: "Mar 15, 2025", involved: 3, duration: "2 weeks" },
  { id: 6, name: "Solace Brand Site", amount: "$5,200", status: "Complete", approaches: 5, posted: "Mar 17, 2025", duration: "2 weeks", completion: "Mar 18, 2025", rating: 4 },
  { id: 7, name: "Meridian API Integration", amount: "$14,000", status: "Complete", approaches: 8, posted: "Mar 19, 2025", duration: "5 weeks", completion: "Mar 22, 2025", rating: 5 },
  { id: 8, name: "Coastal App Onboarding", amount: "$3,900", status: "Complete", approaches: 4, posted: "Mar 21, 2025", duration: "1 week", completion: "Mar 27, 2025", rating: 3 },
  { id: 9, name: "Atlas Finance Workspace", amount: "$18,500", status: "Ongoing", approaches: 11, posted: "Mar 24, 2025", involved: 5, duration: "6 weeks" },
  { id: 10, name: "Bloom Wellness Platform", amount: "$7,600", status: "Published", approaches: 6, posted: "Mar 25, 2025" },
  { id: 11, name: "Arc Logistics Console", amount: "$11,400", status: "Ongoing", approaches: 3, posted: "Mar 26, 2025", involved: 2, duration: "3 weeks" },
  { id: 12, name: "Sora Learning Hub", amount: "$10,200", status: "Published", approaches: 7, posted: "Mar 27, 2025" },
];

export const freelancers = [
  { initials: "AR", name: "Aarav Raman", skills: "React · Node.js", project: "Finale App", tone: "lime" },
  { initials: "PS", name: "Priya Sen", skills: "Figma · Design Systems", project: "Nova Store", tone: "pink" },
  { initials: "DK", name: "Dev Kapoor", skills: "AWS · Terraform", project: "Orbit CRM", tone: "violet" },
];

export const notifications = [
  { icon: "bell", title: "New approach on Finale Mobile App", detail: "Aarav Raman submitted a proposal worth $12,000.", time: "2 min ago", tone: "pink" },
  { icon: "check", title: "Project delivered: Meridian API", detail: "Dev Kapoor marked the milestone as complete.", time: "1 hr ago", tone: "lime" },
  { icon: "message", title: "Priya Sen sent a message", detail: "“Uploaded the final design files for Nova Store.”", time: "3 hr ago", tone: "violet" },
  { icon: "star", title: "New 5-star rating received", detail: "Lumen Analytics Portal rated by client Acme Co.", time: "Yesterday", tone: "amber" },
];

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];