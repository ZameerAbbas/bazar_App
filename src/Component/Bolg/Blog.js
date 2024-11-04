import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Conatiner,
  HeadingSection,
  HeadingWrapper,
  BlogsConatiner,
  BlogWrapper,
  BlogCard,
} from "./BlogElements";

const Blog = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Conatiner id="Blog">
      <HeadingSection>
        <HeadingWrapper data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine">
          <h1>Our Blogs</h1>
          <h3>View All Blogs</h3>
        </HeadingWrapper>
      </HeadingSection>
      <BlogsConatiner>
        <BlogWrapper>
          <BlogCard data-aos="zoom-in-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
            <h1>Blog1</h1>
            <h3>lorem ispam</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </BlogCard>
          <BlogCard data-aos="zoom-in-right"
          data-aos-offset="350"
          data-aos-easing="ease-in-sine">
          <h1>Blog3</h1>
            <h3>lorem ispam</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </BlogCard>
          <BlogCard data-aos="zoom-in-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine">
          <h1>Blog3</h1>
            <h3>lorem ispam</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </BlogCard>
        </BlogWrapper>
      </BlogsConatiner>
    </Conatiner>
  );
};

export default Blog;
