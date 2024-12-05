import { Radio, SegmentedControl } from '@mantine/core';
import { type OperatorFilterOptions, createOperatorFilter } from './createOperatorFilter';
import type { DataGridFilterInput, DataGridFilterOperator } from './types';

const toValue = (value: boolean) => (value ? 'true' : 'false');
const toState = (value: string): boolean => value === 'true';

type BooleanInputOptions = {
  variant?: 'segmented' | 'radio';
  trueLabel?: string;
  falseLabel?: string;
};

export function createBooleanFilterInput({
  variant = 'segmented',
  trueLabel = 'true',
  falseLabel = 'false',
}: BooleanInputOptions): DataGridFilterInput<boolean> {
  return function BooleanFilterInput({ value, onChange, ...rest }) {
    if (variant === 'segmented')
      return (
        <SegmentedControl
          {...rest}
          value={toValue(value)}
          onChange={(value) => onChange(toState(value))}
          data={[
            { label: trueLabel, value: 'true' },
            { label: falseLabel, value: 'false' },
          ]}
          fullWidth
          styles={{
            indicator: {
              // fix visual bug when opening filter dropdown
              height: 'calc(100% - 8px) !important',
            },
          }}
        />
      );
    return (
      <Radio.Group {...rest} value={toValue(value)} onChange={(value) => onChange(toState(value))}>
        <Radio value="true" label={trueLabel} />
        <Radio value="false" label={falseLabel} />
      </Radio.Group>
    );
  };
}

export const booleanOperators = {
  equals: (options?: BooleanInputOptions): DataGridFilterOperator<boolean, boolean> => ({
    op: 'eq',
    label: 'equals',
    filterFn: (rowValue, filterValue) => rowValue === filterValue,
    element: createBooleanFilterInput(options ?? {}),
  }),
};

export function createBooleanFilter(options?: Partial<OperatorFilterOptions<boolean, boolean>> & BooleanInputOptions) {
  const { variant, trueLabel, falseLabel, ...rest } = options ?? {};
  return createOperatorFilter({
    init: () => true,
    operators: [booleanOperators.equals({ variant, trueLabel, falseLabel })],
    ...rest,
  });
}

export const booleanFilterFn = createBooleanFilter();
