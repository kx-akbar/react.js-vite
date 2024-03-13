import analitik from "../assets/icon/Chart.svg?react";
import groups from "../assets/icon/Groups.svg?react";
import Note from "../assets/icon/Note.svg?react";
import moliya from "../assets/icon/Lids.svg?react";
import setting from "../assets/icon/Setting.svg?react";
import hr from "../assets/icon/HR.svg?react";
import course from "../assets/icon/Courses.svg?react";
import students from "../assets/icon/Students.svg?react";
import logOut from "../assets/icon/Logout.svg?react";
import adminLogo from "../assets/images/userLogo.png";

// Brand Name
export const brandName = { brandName: "Webbrain.crm" };

// Admin data
export const adminData = {
  id: 1,
  name: "Sardorbek Muhtorov",
  email: "s.muhtorov@gmail.com",
  logo: adminLogo,
};

// Navbar List Items
export const navLists = [
  { id: 1, title: "Anlitika", data: [], iconClass: analitik },
  {
    id: 2,
    title: "Buyurtma",
    data: [
      "Buyurtmalar ro'yxati",
      "Birinchi darsga yozilish",
      "Yangi talabalar ro'yxati",
    ],
    iconClass: Note,
  },
  {
    id: 3,
    title: "Lidlar",
    data: ["Barcha Lidlar", "Birinchi dars", "Yangi Talabalar"],
    iconClass: moliya,
  },
  {
    id: 4,
    title: "Moliya",
    data: [],
    iconClass: moliya,
  },
  {
    id: 5,
    title: "Talaba",
    data: ["Barcha Talabalar", "Davomat", "Active", "Arxiv", "Ota-onalar"],
    iconClass: students,
  },
  {
    id: 6,
    title: "Guruhlar",
    data: ["Guruhlar", "Dars Jadvali", "Xonalar"],
    iconClass: groups,
  },
  {
    id: 7,
    title: "Kurslar",
    data: ["Barcha Kurslar", "Yo'nalishlar"],
    iconClass: course,
  },
  {
    id: 8,
    title: "HR",
    data: ["Ro'llar", "Xodimlar"],
    iconClass: hr,
  },
  {
    id: 9,
    title: "Sozlamalar",
    data: ["Umumiy Sozlamalar", "Manager", "Mentor", "Talaba"],
    iconClass: setting,
  },
  {
    id: 10,
    title: "Chiqish",
    data: [],
    iconClass: logOut,
  },
];
