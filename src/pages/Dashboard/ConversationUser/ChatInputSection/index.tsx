import React, { useEffect, useState } from "react";
import { Alert, Form } from "reactstrap";

// components
import StartButtons from "./StartButtons";
import InputSection from "./InputSection";
import EndButtons from "./EndButtons";
import MoreMenu from "./MoreMenu";
import Reply from "./Reply";

// interface
import { MessagesTypes } from "../../../../data/messages";

interface IndexProps {
  onSend: (data: any) => void;
  replyData: null | MessagesTypes | undefined;
  onSetReplyData: (reply: null | MessagesTypes | undefined) => void;
  chatUserDetails: any;
}
const Index = ({
  onSend,
  replyData,
  onSetReplyData,
  chatUserDetails,
}: IndexProps) => {
  /*
  more menu collapse
  */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  /*
  disable send button
  */
  const [disabled, setDisabled] = useState<boolean>(true);

  /*
  input text
  */
  const [text, setText] = useState<null | string>(null);
  const onChangeText = (value: string) => {
    setText(value);
  };

  /*
  images
  */
  const [images, setImages] = useState<Array<any> | null | undefined>();
  const onSelectImages = (images: Array<any>) => {
    setImages(images);
  };

  /*
  files
  */
  const [files, setFiles] = useState<Array<any> | null | undefined>();
  const onSelectFiles = (files: Array<any>) => {
    setFiles(files);
  };
  useEffect(() => {
    if (text || images || files) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [text, images, files]);

  const onSubmit = () => {
    let data: any = {};
    if (text) {
      data["text"] = text;
    }
    if (images && images.length) {
      const imgs = (images || []).map((i: any, key: number) => {
        const src = URL.createObjectURL(i);
        return {
          id: key + 1,
          downloadLink: src,
        };
      });
      data["image"] = imgs;
    }

    if (files && files.length) {
      const fs = (files || []).map((f: any, key: number) => {
        const src = URL.createObjectURL(f);
        return {
          id: key + 1,
          name: f.name,
          downloadLink: src,
          desc: f.size,
        };
      });
      data["attachments"] = fs;
    }

    setText("");
    setImages(null);
    setFiles(null);
    onSend(data);
  };

  const onClearMedia = () => {
    setImages(null);
    setFiles(null);
  };
  return (
    <div className="chat-input-section p-3 p-lg-4">
      <Form
        id="chatinput-form"
        onSubmit={(e: any) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="row g-0 align-items-center">
          <div className="col-auto">
            <StartButtons
              onToggle={onToggle}
              text={text}
              onChange={onChangeText}
            />
          </div>
          <div className="col">
            <InputSection value={text} onChange={onChangeText} />
          </div>
          <div className="col-auto">
            <EndButtons onSubmit={onSubmit} disabled={disabled} />
          </div>
        </div>
      </Form>

      {(images && images.length) || (files && files.length) ? (
        <Alert
          isOpen={true}
          toggle={onClearMedia}
          color="secondary"
          className="alert-dismiss-custom 
        rounded-pill font-size-12 mb-1 selected-media"
          closeClassName="selected-media-close"
        >
          <p className="me-2 mb-0">
            {images && !files && ` You have selected ${images.length} images`}
            {files && !images && ` You have selected ${files.length} files`}
            {files &&
              images &&
              ` You have selected ${files.length} files & ${images.length} images.`}
          </p>
        </Alert>
      ) : null}

      <MoreMenu
        isOpen={isOpen}
        onSelectImages={onSelectImages}
        onSelectFiles={onSelectFiles}
        onToggle={onToggle}
      />

      <Reply
        reply={replyData}
        onSetReplyData={onSetReplyData}
        chatUserDetails={chatUserDetails}
      />
    </div>
  );
};

export default Index;
