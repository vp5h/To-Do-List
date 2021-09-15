import React from 'react';
import { Sidebar } from './sidebar';
import { Tasks } from '../Tasks';

export const Content = () => (
  <section className="content">
    <Sidebar />
    <Tasks />
  </section>
);
