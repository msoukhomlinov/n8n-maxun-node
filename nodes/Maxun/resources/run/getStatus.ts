import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRunGetStatus = {
	operation: ['getStatus'],
	resource: ['run'],
};

export const runGetStatusDescription: INodeProperties[] = [
	{
		displayName: 'Robot',
		name: 'robotId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		displayOptions: {
			show: showOnlyForRunGetStatus,
		},
		description: 'The robot the run belongs to',
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
	{
		displayName: 'Run ID',
		name: 'runId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForRunGetStatus,
		},
		description: 'The ID of the run to check',
		placeholder: 'e.g. run123-abc456-...',
	},
];
