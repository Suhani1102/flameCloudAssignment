import React from "react";
import Category from "../Components/Category";

const PlanManagement = () => {
  let planData = [
    {
      id: 1,
      categoryName: "Marketing",
      subCategories: [
        { id: 1, subCategoryName: "Wordpress", pointers: [] },
        { id: 2, subCategoryName: "Google Drive", pointers: [] },
      ],
    },
    {
      id: 2,
      categoryName: "Design",
      subCategories: [{ id: 1, subCategoryName: "Wordpress", pointers: [] }],
    },
    {
      id: 3,
      categoryName: "Sales",
      subCategories: [{ id: 1, subCategoryName: "Wordpress", pointers: [] }],
    },
  ];
  return (
    <div>
      <Category key={planData.id} catData={planData} />
    </div>
  );
};

export default PlanManagement;
