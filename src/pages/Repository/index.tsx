import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo_transparent.png';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repo: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img id="logo" src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/4613916?v=4"
            alt="Gus Varallo"
          />
          <div>
            <strong>guvarallo/githubexplorer</strong>
            <p>description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="test">
          <div>
            <strong>repo.full_name</strong>
            <p>repo.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
