import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// interface
import { MediaTypes, MediaListItemTypes } from "../data/myProfile";

interface MediaProps {
  media: MediaTypes;
  limit: number;
}

interface MediaItemProps {
  mediaItem: MediaListItemTypes;
  hasMore: boolean;
  remainingItem: number;
}
const MediaItem = ({ mediaItem, hasMore, remainingItem }: MediaItemProps) => {
  return (
    <div className="media-img-list">
      <Link to="#">
        <img src={mediaItem.url} alt="media img" className="img-fluid" />
        {hasMore && <div className="bg-overlay">+ {remainingItem}</div>}
      </Link>
    </div>
  );
};
const Media = ({ media, limit }: MediaProps) => {
  const [mediaList, setMediaList] = useState<MediaListItemTypes[]>([]);
  useEffect(() => {
    if (media && media.list) setMediaList(media.list);
  }, [media]);
  const total = mediaList.length;
  const remainingItem = total - limit;
  return (
    <div>
      <div className="d-flex">
        <div className="flex-grow-1">
          <h5 className="font-size-11 text-muted text-uppercase">Media</h5>
        </div>
        <div className="flex-shrink-0">
          <Link to="#" className="font-size-12 d-block mb-2">
            Show all
          </Link>
        </div>
      </div>
      <div className="profile-media-img">
        {media
          ? (mediaList || []).map(
              (mediaItem: MediaListItemTypes, key: number) => {
                const hasMore: boolean = key === limit;

                if (key <= limit) {
                  return (
                    <MediaItem
                      mediaItem={mediaItem}
                      key={key}
                      hasMore={hasMore}
                      remainingItem={remainingItem}
                    />
                  );
                } else return null;
              }
            )
          : "No Media Files."}
      </div>
    </div>
  );
};
export default Media;
