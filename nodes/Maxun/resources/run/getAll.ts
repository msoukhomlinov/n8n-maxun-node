import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRunGetAll = {
	operation: ['getAll'],
	resource: ['run'],
};

export const runGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Robot',
		name: 'robotId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		displayOptions: {
			show: showOnlyForRunGetAll,
		},
		description: 'The robot to get runs for',
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
