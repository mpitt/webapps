/**
 * Copyright 2020 Gravitational, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { AddApp } from './AddApp';

export default {
  title: 'Teleport/Apps/Add',
};

export const Created = () => (
  <AddApp {...sample.props} attempt={{ status: 'success' }} />
);

export const Loaded = () => {
  return <AddApp {...sample.props} cmd="" />;
};

export const Processing = () => (
  <AddApp {...sample.props} attempt={{ status: 'processing' }} />
);

export const Failed = () => (
  <AddApp
    {...sample.props}
    attempt={{ status: 'failed', statusText: 'some error message' }}
  />
);

export const Manually = () => (
  <AddApp
    {...sample.props}
    automatic={false}
    attempt={{ status: 'failed', statusText: 'some error message' }}
  />
);

const sample = {
  props: {
    user: 'sam',
    automatic: true,
    setAutomatic: () => null,
    createToken: () => Promise.resolve(true),
    onClose() {
      return null;
    },
    createJoinToken() {
      return Promise.resolve(null);
    },
    version: '5.0.0-dev',
    cmd: `sudo bash -c "$(curl -fsSL 'http://localhost/scripts/86/install-app.sh?name=test&uri=http://myapp/')"`,
    canCreateToken: true,
    expires: '1 hour',
    reset: () => null,
    attempt: {
      status: '',
      statusText: '',
    } as any,
  },
};
