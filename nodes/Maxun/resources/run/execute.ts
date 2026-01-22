import type { INodeProperties } from 'n8n-workflow';

const showOnlyForRunExecute = {
	operation: ['execute'],
	resource: ['run'],
};

export const runExecuteDescription: INodeProperties[] = [
	{
		displayName: 'Robot',
		name: 'robotId',
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		displayOptions: {
			show: showOnlyForRunExecute,
		},
		description: 'The robot to execute',
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
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		placeholder: 'Add Option',
		default: {},
		displayOptions: {
			show: showOnlyForRunExecute,
		},
		options: [
			{
				displayName: 'Output Formats',
				name: 'formats',
				type: 'multiOptions',
				options: [
					{
						name: 'HTML',
						value: 'html',
					},
					{
						name: 'Markdown',
						value: 'markdown',
					},
				],
				default: [],
				description: 'Optional override formats for this run',
				routing: {
					send: {
						type: 'body',
						property: 'formats',
					},
				},
			},
		],
	},
];
