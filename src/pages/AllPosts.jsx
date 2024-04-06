import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { PostCard, Container } from "../components";

function AllPosts() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((posts) => {
        if (posts) {
          setposts(posts.documents);
        }
      })
      .catch();
  }, []);
  return (
    <div className="py-8 w-full">
      <Container>
        <div className="flex flex-wrap ">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 ">
              {/* <PostCard key={post.$id} post={...post}></PostCard> */}
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
