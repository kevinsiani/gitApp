import React, { Component } from 'react';

import { FaGithub, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
  };

  render() {
    return (
      <Container>
        <h1>
          <FaGithub />
          Repositórios
        </h1>

        <Form>
          <input type="text" placeholder="Adicionar repositório" />

          <SubmitButton>
            <FaPlus color="#fff" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
