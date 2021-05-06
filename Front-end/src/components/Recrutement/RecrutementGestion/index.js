import React, { useState, useEffect } from 'react';

// components

import ListPostGestion from './ListPostGestion'
import EditPost from './EditPost'
import Error404 from '../../Error404';


// ==== CSS ==== //

const MembresGestion = ({ 
  changeField,
  listAllPost,
  isAdmin,
  deletePost,
  fetchAllPostList,
  updatePost,
 }) => {

  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [postSelect, setPostSelect] = useState([]);

  const handleEdit = (post, evt) => {
    evt.preventDefault();
    setEdit(true);
    setPostSelect(post)
    changeField(post.id, "postUpdateId");
    changeField(post.User.id, "postUpdateUserId");
    changeField(post.title, "postUpdateTitle");
    changeField(post.status, "postUpdateStatus");
    changeField(post.content, "postUpdateContent")
    if(post.isActive){
      changeField(1, "postUpdateIsActive");
    } else {
      changeField(0, "postUpdateIsActive");
    }
    
  }

  const handleBack = (evt) => {
    evt.preventDefault();
    setAdd(false);
    setEdit(false);
  }

  const hundleDeletePostId = (post, evt) => {
    evt.preventDefault();
    changeField(post.id, 'postDeletedId');
  }

  const hundleDeletePost = (evt) => {
    evt.preventDefault();
    deletePost();
  }

  const isActiveOrNot = (isActive) =>{
    if(isActive){
      return '✅'
    }
    return '❌'
  }

  useEffect(() => {
    fetchAllPostList();
  }, []);

  return(
    
    <main className="container membreGestion mt-5 mb-5">

      {!isAdmin && <Error404 />}

      {isAdmin && (<>

        {!edit && (
          <ListPostGestion 
            handleEdit={handleEdit}
            listAllPost={listAllPost}
            hundleDeletePost={hundleDeletePost}
            hundleDeletePostId={hundleDeletePostId}
            isActiveOrNot={isActiveOrNot}
          />
        )}

        {edit && (
          <EditPost 
            updatePost={updatePost}
            changeField={changeField}
            postSelect={postSelect}
            handleBack={handleBack}
          />
        )}

      </>)}
    
    </main>
  );
};

export default MembresGestion;