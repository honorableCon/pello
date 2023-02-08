import React from "react";
import { Link } from "react-router-dom";

interface AttachedFilesProps {
  chatUserDetails: any;
}
const AttachedFiles = ({ chatUserDetails }: AttachedFilesProps) => {
  return (
    <div>
      <div>
        <h5 className="font-size-11 text-muted text-uppercase mb-3">
          Attached Files
        </h5>
      </div>

      <div>
        <div className="card p-2 border mb-2">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 avatar-xs ms-1 me-3">
              <div className="avatar-title bg-soft-primary text-primary rounded-circle">
                <i className="bx bx-file"></i>
              </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <h5 className="font-size-14 text-truncate mb-1">
                design-phase-1-approved.pdf
              </h5>
              <p className="text-muted font-size-13 mb-0">12.5 MB</p>
            </div>

            <div className="flex-shrink-0 ms-3">
              <div className="d-flex gap-2">
                <div>
                  <Link to="#" className="text-muted px-1">
                    <i className="bx bxs-download"></i>
                  </Link>
                </div>
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle text-muted px-1"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Share <i className="bx bx-share-alt ms-2 text-muted"></i>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Bookmark{" "}
                      <i className="bx bx-bookmarks text-muted ms-2"></i>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Delete <i className="bx bx-trash ms-2 text-muted"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-2 border mb-2">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 avatar-xs ms-1 me-3">
              <div className="avatar-title bg-soft-primary text-primary rounded-circle">
                <i className="bx bx-image"></i>
              </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <h5 className="font-size-14 text-truncate mb-1">Image-1.jpg</h5>
              <p className="text-muted font-size-13 mb-0">4.2 MB</p>
            </div>

            <div className="flex-shrink-0 ms-3">
              <div className="d-flex gap-2">
                <div>
                  <Link to="#" className="text-muted px-1">
                    <i className="bx bxs-download"></i>
                  </Link>
                </div>
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle text-muted px-1"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Share <i className="bx bx-share-alt ms-2 text-muted"></i>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Bookmark{" "}
                      <i className="bx bx-bookmarks text-muted ms-2"></i>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Delete <i className="bx bx-trash ms-2 text-muted"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-2 border mb-2">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 avatar-xs ms-1 me-3">
              <div className="avatar-title bg-soft-primary text-primary rounded-circle">
                <i className="bx bx-image"></i>
              </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <h5 className="font-size-14 text-truncate mb-1">Image-2.jpg</h5>
              <p className="text-muted font-size-13 mb-0">3.1 MB</p>
            </div>

            <div className="flex-shrink-0 ms-3">
              <div className="d-flex gap-2">
                <div>
                  <Link to="#" className="text-muted px-1">
                    <i className="bx bxs-download"></i>
                  </Link>
                </div>
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle text-muted px-1"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Share <i className="bx bx-share-alt ms-2 text-muted"></i>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Bookmark{" "}
                      <i className="bx bx-bookmarks text-muted ms-2"></i>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Delete <i className="bx bx-trash ms-2 text-muted"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-2 border mb-2">
          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 avatar-xs ms-1 me-3">
              <div className="avatar-title bg-soft-primary text-primary rounded-circle">
                <i className="bx bx-file"></i>
              </div>
            </div>
            <div className="flex-grow-1 overflow-hidden">
              <h5 className="font-size-14 text-truncate mb-1">Landing-A.zip</h5>
              <p className="text-muted font-size-13 mb-0">6.7 MB</p>
            </div>

            <div className="flex-shrink-0 ms-3">
              <div className="d-flex gap-2">
                <div>
                  <Link to="#" className="text-muted px-1">
                    <i className="bx bxs-download"></i>
                  </Link>
                </div>
                <div className="dropdown">
                  <Link
                    className="dropdown-toggle text-muted px-1"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bx bx-dots-horizontal-rounded"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Share <i className="bx bx-share-alt ms-2 text-muted"></i>
                    </Link>
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Bookmark{" "}
                      <i className="bx bx-bookmarks text-muted ms-2"></i>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link
                      className="dropdown-item d-flex align-items-center justify-content-between"
                      to="#"
                    >
                      Delete <i className="bx bx-trash ms-2 text-muted"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachedFiles;
