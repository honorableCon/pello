export interface BookMarkTypes {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

let bookmarks: BookMarkTypes[] = [
  {
    id: 1,
    icon: "bx bx-file",
    title: "design-phase-1-approved.pdf",
    desc: "12.5 MB",
  },
  {
    id: 2,
    icon: "bx bx-pin",
    title: "Bg Pattern",
    desc: "https://bgpattern.com/",
  },
  {
    id: 3,
    icon: "bx bx-image",
    title: "Image-001.jpg",
    desc: "4.2 MB",
  },
  {
    id: 4,
    icon: "bx bx-pin",
    title: "Images",
    desc: "https://images123.com/",
  },
  {
    id: 5,
    icon: "bx bx-pin",
    title: "Bg Gradient",
    desc: "https://bggradient.com/",
  },
  {
    id: 6,
    icon: "bx bx-image",
    title: "Image-012.jpg",
    desc: "3.1 MB",
  },
  {
    id: 7,
    icon: "bx bx-file",
    title: "analytics dashboard.zip",
    desc: "6.7 MB",
  },
  {
    id: 8,
    icon: "bx bx-image",
    title: "Image-031.jpg",
    desc: "4.2 MB",
  },
  {
    id: 9,
    icon: "bx bx-file",
    title: "Changelog.txt",
    desc: "6.7 MB",
  },
  {
    id: 10,
    icon: "bx bx-file",
    title: "Widgets.zip",
    desc: "6.7 MB",
  },
  {
    id: 1,
    icon: "bx bx-image",
    title: "logo-light.png",
    desc: "4.2 MB",
  },
  {
    id: 11,
    icon: "bx bx-image",
    title: "Image-2.jpg",
    desc: "3.1 MB",
  },
  {
    id: 12,
    icon: "bx bx-file",
    title: "Landing-A.zip",
    desc: "6.7 MB",
  },
];

const onChangeBookmark = (newData: BookMarkTypes[]) => {
  bookmarks = newData;
};

export { bookmarks, onChangeBookmark };
