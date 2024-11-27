
function PageLayout({children, pageTitle}) {
    return (
        <div className="page-content">

        <div className="container-fluid">
          <div className="flex justify-between mb-10">
            <div className="page-title">
              <h4 className="mb-0">{pageTitle}</h4>
            </div>
          </div>
          {children}
        </div>
      </div>
    )
}

export default PageLayout
