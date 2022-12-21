import React, {useState} from 'react';
import {  useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Character from '../../components/Character';
import UpdateCharacter from '../../components/UpdateCharacter';
import Auth from '../../Utils/auth';
import { QUERY_USER_CHARACTER, QUERY_ME } from '../../Utils/queries';
import { QUERY_MY_CHARACTERS } from '../../Utils/queries';


const Profile = () => {
  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_MY_CHARACTERS : QUERY_ME, {
    variables: { username: userParam },
  });


  const user = data?.me || data?.user || {};
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (!user?.username) {
    return (
      <h4>Login required</h4>
    );
  }

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
      <div className="py-5 h-100">
        <div className="justify-content-center align-items-center h-100">
          <div lg="9" xl="7">
            <div className='Card'>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <div  src="DnD\client\public\assets\image1.jpeg"
                    alt="Generic profile image" className="mt-4 mb-2 img-thumbnail cardimage" fluid style={{ width: '150px', zIndex: '1' }} />
                  <button outline color="dark" style={{height: '36px', overflow: 'visible'}}>
                    Edit profile
                  </button>
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <div className='profilename' tag="h5">Andy Horwitz</div>
                  <div className='profiletag'>New York</div>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <div className="mb-1 h5">${user.username}</div>
                    <div className="small text-muted mb-0">Username</div>
                  </div>  
                </div>
              </div>
              <section className="text-black p-4 cardBody">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <textarea className="font-italic mb-1">Web Developer</textarea>
                    
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="lead fw-normal mb-0 galleryhead">Recent characters</div>
                  <div className="mb-0 expand"><a href="#!" className="text-muted">Show all</a></div>
                </div>
                <Character>character={user.character}</Character>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;