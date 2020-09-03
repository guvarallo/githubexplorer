import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo_transparent.png';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img id="logo" src={logo} alt="GitHub Explorer" />
      <Title>Explore GitHub Repos</Title>

      <Form>
        <input placeholder="Type the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/4613916?s=460&u=c012cee5967a79575b2ae7c834496a1a289112ca&v=4"
            alt="Gus Varallo"
          />
          <div>
            <strong>guvarallo/facerecognition</strong>
            <p>
              Face Recon is an app that recongnizes faces in any picture URL
              using Clarifai&#39;s API.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/4613916?s=460&u=c012cee5967a79575b2ae7c834496a1a289112ca&v=4"
            alt="Gus Varallo"
          />
          <div>
            <strong>guvarallo/facerecognition</strong>
            <p>
              Face Recon is an app that recongnizes faces in any picture URL
              using Clarifai&#39;s API.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/4613916?s=460&u=c012cee5967a79575b2ae7c834496a1a289112ca&v=4"
            alt="Gus Varallo"
          />
          <div>
            <strong>guvarallo/facerecognition</strong>
            <p>
              Face Recon is an app that recongnizes faces in any picture URL
              using Clarifai&#39;s API.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/4613916?s=460&u=c012cee5967a79575b2ae7c834496a1a289112ca&v=4"
            alt="Gus Varallo"
          />
          <div>
            <strong>guvarallo/facerecognition</strong>
            <p>
              Face Recon is an app that recongnizes faces in any picture URL
              using Clarifai&#39;s API.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
