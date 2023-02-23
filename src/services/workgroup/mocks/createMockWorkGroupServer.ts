/* eslint-disable no-console */
import express from 'express';

/**
 * Mock Work Group Server
 */
export const createMockWorkGroupServer = async (router: express.Router) => {
  // Mock the workgroup endpoint
  router.get('/~sheamck:adapt-honor-staff', express.json(), (req, res) => {
    const data = {
      filter: 'NONE',
      privgroup: 'TRUE',
      visibility: 'STANFORD',
      lastUpdate: '25-Aug-2022',
      members: [
        {
          lastUpdate: '25-Aug-2022',
          name: 'McKinney, Shea',
          id: 'sheamck',
          type: 'PERSON',
        },
        {
          lastUpdate: '25-Aug-2022',
          name: 'Tang, Yvonne',
          id: 'ytang2',
          type: 'PERSON',
        },
        {
          lastUpdate: '25-Aug-2022',
          name: 'Plowman, Nathan',
          id: 'nplowman',
          type: 'PERSON',
        },
      ],
      name: '~sheamck:adapt-honor-staff',
      description: 'Allowance to staff members to view Alumni Honor',
      integrations: [],
      administrators: [
        {
          lastUpdate: '25-Aug-2022',
          name: 'McKinney, Shea',
          id: 'sheamck',
          type: 'PERSON',
        },
      ],
      reusable: 'TRUE',
      lastUpdateBy: 'workgroup_maint',
    };
    res.json(data);
  });

  return router;
};
