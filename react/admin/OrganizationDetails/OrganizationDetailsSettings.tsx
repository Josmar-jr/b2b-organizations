import { PageBlock, Checkbox } from 'vtex.styleguide'
import React, { Fragment } from 'react'

export interface PermissionsOptions {
  value: boolean
  label: string
}

type Permission = 'createQuote'

interface OrganizationDetailsSettingsProps {
  permissionsOptions: PermissionsOptions[]
  setPermissionsOptions: React.Dispatch<
    React.SetStateAction<PermissionsOptions[]>
  >
}

const simulateTranslate: Record<Permission, string> = {
  createQuote: 'Criar cota',
}

const OrganizationDetailsSettings = ({
  permissionsOptions,
  setPermissionsOptions,
}: OrganizationDetailsSettingsProps) => {
  const handleCheckboxChange = (label: string) => {
    setPermissionsOptions(prevOptions =>
      prevOptions.map(option =>
        option.label === label ? { ...option, value: !option.value } : option
      )
    )
  }

  return (
    <Fragment>
      <PageBlock title="Configurações de permissão">
        {permissionsOptions.map(permissionOption => (
          <div>
            <Checkbox
              checked={permissionOption.value}
              id="permissionOrganization"
              name="permissionOrganization"
              onChange={() => handleCheckboxChange(permissionOption.label)}
              label={simulateTranslate[permissionOption.label as Permission]}
            />
          </div>
        ))}
      </PageBlock>
    </Fragment>
  )
}

export default OrganizationDetailsSettings
