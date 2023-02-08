import React from "react";

interface EmptyStateContactsProps {
  searchedText: string;
}
const EmptyStateContacts = ({ searchedText }: EmptyStateContactsProps) => {
  return (
    <div className="rounded p-4 text-center">
      <i className="bx bx-info-circle fs-1 mb-3" />
      <div>No results found for "{searchedText}".</div>
    </div>
  );
};

export default EmptyStateContacts;
