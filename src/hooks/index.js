import { getRole } from "@utils"

/**
 * get role using hook
 * @param {Array} roles 
 */
export const useRole = roles => {
  const roleFromCookie = getRole()
  return roles.includes(roleFromCookie)
}