import React from "react";
import { Link } from "react-router-dom";

import { Collapse, Card, CardBody, Input, Label } from "reactstrap";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

interface MoreMenuProps {
  isOpen: boolean;
  onSelectImages: (images: Array<any>) => void;
  onToggle: () => any;
  onSelectFiles: (files: Array<any>) => void;
}
const MoreMenu = ({
  isOpen,
  onSelectImages,
  onToggle,
  onSelectFiles,
}: MoreMenuProps) => {
  const onSelect = (e: any) => {
    const files = [...e.target.files];
    if (files) {
      // const src = URL.createObjectURL(files[0]);
      onSelectImages(files);
      onToggle();
    }
  };

  const onSelectF = (e: any) => {
    const files = [...e.target.files];
    if (files) {
      onSelectFiles(files);
      onToggle();
    }
  };

  return (
    <Collapse
      isOpen={isOpen}
      className="chat-input-collapse"
      id="chatinputmorecollapse"
    >
      <Card className="mb-0">
        <CardBody className="py-3">
          <Swiper
            observer
            observeParents
            freeMode
            watchSlidesProgress
            watchSlidesVisibility
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="chatinput-links"
          >
            <SwiperSlide>
              <div className="text-center px-2 position-relative">
                <div>
                  <Input
                    id="attachedfile-input"
                    type="file"
                    className="d-none"
                    onChange={(e: any) => onSelectF(e)}
                    multiple
                  />
                  <Label
                    htmlFor="attachedfile-input"
                    className="avatar-sm mx-auto stretched-link"
                  >
                    <span className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                      <i className="bx bx-paperclip"></i>
                    </span>
                  </Label>
                </div>
                <h5 className="font-size-11 text-uppercase mt-3 mb-0 text-body text-truncate">
                  Attached
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center px-2">
                <div className="avatar-sm mx-auto">
                  <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                    <i className="bx bxs-camera"></i>
                  </div>
                </div>
                <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                  <Link to="#" className="text-body stretched-link">
                    Camera
                  </Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* <div className="text-center px-2">
                <div className="avatar-sm mx-auto">
                  <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                    <i className="bx bx-images"></i>
                  </div>
                </div>

                <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                  <Link to="#" className="text-body stretched-link">
                    Gallery
                  </Link>
                </h5>
              </div> */}
              <div className="text-center px-2 position-relative">
                <div>
                  <Input
                    id="attached-image-input"
                    type="file"
                    className="d-none"
                    accept="image/png, image/jpeg"
                    onChange={(e: any) => onSelect(e)}
                    multiple
                  />
                  <Label
                    htmlFor="attached-image-input"
                    className="avatar-sm mx-auto stretched-link cursor-pointer"
                  >
                    <span className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                      <i className="bx bx-images"></i>
                    </span>
                  </Label>
                </div>
                <h5 className="font-size-11 text-uppercase mt-3 mb-0 text-body text-truncate">
                  Gallery
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center px-2">
                <div className="avatar-sm mx-auto">
                  <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                    <i className="bx bx-headphone"></i>
                  </div>
                </div>

                <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                  <Link to="#" className="text-body stretched-link">
                    Audio
                  </Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center px-2">
                <div className="avatar-sm mx-auto">
                  <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                    <i className="bx bx-current-location"></i>
                  </div>
                </div>

                <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                  <Link to="#" className="text-body stretched-link">
                    Location
                  </Link>
                </h5>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center px-2">
                <div className="avatar-sm mx-auto">
                  <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                    <i className="bx bxs-user-circle"></i>
                  </div>
                </div>
                <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                  <Link
                    to="#"
                    className="text-body stretched-link"
                    data-bs-toggle="modal"
                    data-bs-target=".contactModal"
                  >
                    Contacts
                  </Link>
                </h5>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide d-block d-sm-none">
              <div className="text-center px-2">
                <div className="avatar-sm mx-auto">
                  <div className="avatar-title font-size-18 bg-soft-primary text-primary rounded-circle">
                    <i className="bx bx-microphone"></i>
                  </div>
                </div>
                <h5 className="font-size-11 text-uppercase text-truncate mt-3 mb-0">
                  <Link to="#" className="text-body stretched-link">
                    Audio
                  </Link>
                </h5>
              </div>
            </SwiperSlide>
          </Swiper>
        </CardBody>
      </Card>
    </Collapse>
  );
};

export default MoreMenu;
