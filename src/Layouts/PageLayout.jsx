function PageLayout({ children, pageTitle }) {
  return (
    //   <div className="page-content">

    //   <div className="container-fluid">
    //     <div className="flex justify-between mb-10">
    //       <div className="page-title">
    //         <h4 className="mb-0">{pageTitle}</h4>
    //       </div>
    //     </div>
    //     {children}
    //   </div>

    // </div>
    <div className="page-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between mb-5">
          <div className="page-title">
            <h4 className="text-lg font-medium mb-0">{pageTitle}</h4>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
