import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRobotGet = {
	operation: ['get'],
	resource: ['robot'],
};

export const robotGetDescription: INodeProperties[] = [
	{
		displayName: 'Robot',
		name: 'robotId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		displayOptions: {
			show: showOnlyForRobotGet,
		},
		description: 'The robot to retrieve',
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				placeholder: 'Select a robot...',
				typeOptions: {
					searchListMethod: 'getRobots',
					searchable: true,
				},
			},
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				placeholder: 'e.g. abc123-def456-...',
			},
		],
	},
];
