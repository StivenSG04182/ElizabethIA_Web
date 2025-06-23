import React from "react";
import Search from "@/components/Storage/ui/Search";
import FileUploader from "@/components/Storage/ui/FileUploader";

const Header = () => {
  return (
    <header className="header flex items-center justify-between">
      <Search />  
      <div className="header-wrapper">
        <FileUploader />
        </div>
    </header>
  );
};

export default Header;