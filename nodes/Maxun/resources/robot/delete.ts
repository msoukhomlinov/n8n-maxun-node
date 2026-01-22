import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRobotDelete = {
	operation: ['delete'],
	resource: ['robot'],
};

export const robotDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Robot',
		name: 'robotId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		displayOptions: {
			show: showOnlyForRobotDelete,
		},
		description: 'The robot to delete',
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
