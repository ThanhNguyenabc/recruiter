import React from "react";
import Hero from "../_common/hero";
import Text from "../_common/text";
import Flex from "../_common/flex";
import HTMLReactParser from "html-react-parser/lib/index";
import { Blog } from "@/models/blog";
import { getEmbedUrl, getMediaTypeFromUrl } from "@/utils/strings";
import OtherArticle from "./OtherArticle";

const BlogDetail = ({ blog }: { blog: Blog }) => {
  if (!blog) return <></>;

  const mediaType = blog.media_link
    ? getMediaTypeFromUrl(blog.media_link)
    : null;
  const embedUrl = getEmbedUrl(blog.media_link || "", mediaType || "");
  return (
    <Hero>
      <Flex className="mb-10">
        <Text type="h1" className="heading-2 text-center">
          {blog.title}
        </Text>
      </Flex>

      {mediaType === "pdf" && (
        <iframe
          src={embedUrl}
          width={"100%"}
          height={"800px"}
          className="mb-10 rounded-xl shadow-lg border border-white/10"
        />
      )}

      {(mediaType === "youtube" || mediaType === "googledrive") && (
        <div className="w-full mb-10 aspect-video overflow-hidden rounded-xl shadow-2xl border border-white/10 glass">
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title={`${mediaType} video`}
            frameBorder="0"
            className="w-full aspect-video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {mediaType === "video" && (
        <div className="w-full mb-10 overflow-hidden rounded-xl shadow-2xl border border-white/10 glass">
          <video controls className="w-full max-h-[70vh]">
            <source src={embedUrl} />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <Flex className="flex-col prose !max-w-none">
        {HTMLReactParser(blog.content || "")}
      </Flex>

      <OtherArticle excludeSlug={blog.slug} />
    </Hero>
  );
};

export default BlogDetail;
