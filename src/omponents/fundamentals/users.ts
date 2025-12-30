export type User = {
  id: number;
  username: string;
  imageUrl: string;
  position: string;
};

export const users: User[] = [
  {
    id: 1,
    username: "john_doe",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    position: "Frontend Developer",
  },
  {
    id: 2,
    username: "sarah_dev",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    position: "Backend Developer",
  },
  {
    id: 3,
    username: "alex_ui",
    imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    position: "UI/UX Designer",
  },
  {
    id: 4,
    username: "linda_data",
    imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    position: "Data Analyst",
  },
];
