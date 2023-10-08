import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation AddUser(
  $email: String!, 
  $fullName: String!, 
  $birthDay: Date!,
  $phoneNumber: String!, 
  $gender: Gender!, 
  $departmentId: String!, 
  $companyId: String!, 
  $employeeCode: String!, 
  ) {
addUser(input : {
  email: $email,
  fullName: $fullName,
  birthDay : $birthDay,
  phoneNumber: $phoneNumber,
  gender: $gender,
  departmentId: $departmentId,
  companyId: $companyId,
  employeeCode: $employeeCode
}) {
    id,
    fullName,
    avatar
}
}
`;

export const ADD_AD_USER = gql`
mutation AddAdUser(
  $adNames: [String!]!
  ) {
addAdUser(
    adNames: $adNames
) {id,name,email}
}`;

export const LOCK_USER = gql`
mutation LockUser(
  $userId: String!,
  $isLock: Boolean!
){lockUser
  (
      userId: $userId,
      isLock: $isLock
  )
}
`;

export const RESET_PASS = gql`
mutation resetPass(
  $userId: String!
){resetPassword
  (
      userId: $userId
  )
}
`;

export const CHANGE_PASS = gql`
mutation changePassword(
  $userId: String!,
  $oldPassword: String!,
  $newPassword: String!,
){changePassword
  (
      userId: $userId
      oldPassword: $oldPassword
      newPassword: $newPassword
  )
}
`;

export const UPDATE_USER = gql`
mutation UpdateUser(
  $userId: String!, 
  $email: String!, 
  $fullName: String!, 
  $birthDay: Date!,
  $phoneNumber: String!, 
  $gender: Gender!, 
  $departmentId: String!, 
  $companyId: String!, 
  $employeeCode: String!, 
  $adName: String!,
  $title: String! 
  ) {
updateUser(input : {
  userId: $userId,
  email: $email,
  fullName: $fullName,
  birthDay : $birthDay,
  phoneNumber: $phoneNumber,
  gender: $gender,
  departmentId: $departmentId,
  companyId: $companyId,
  employeeCode: $employeeCode,
  adName: $adName,
  title: $title
}) {
    id,
    fullName,
    avatar
}
}
`;

export const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken,
      roles{id, name}
    }
  }
`;

export const LOGOUT = gql`
mutation Logout{logout}
`;

export const USER_PROFILE_QUERY = gql`
  query User {
    userWeb {
      id
      fullName
      avatar
      avatarBase64{data}
      email
      roles{id,name}
    }
  }
`;

export const SEARCH_USER = gql`
query GetUserInDepartment(
  $input: UserSearchInput!,
){searchUser
  (
      input: $input
  ){
    id,
    email,
    fullName,
    birthDay,
    gender,
    avatar,
    avatarBase64{
        path,
        data
    },
    faceImages,
    department{id,name},
    company{id,name},
    integrationKey,
    phoneNumber,
    status,
    dateCreated,
    dateModified,
    count,
    faceImagesArrayBase64{
        id,
        userId,
        faceImageType,
        path,
        data
    },
  }
}
`;

export const SEARCH_USER_NEW = gql`
query GetUserInDepartment(
  $input: UserSearchInput!,
){search
  (
      input: $input
  ){
    id,
    email,
    fullName,
    birthDay,
    gender,
    avatar,
    avatarBase64{
        path,
        data
    },
    faceImages,
    department{id,name},
    company{id,name},
    integrationKey,
    phoneNumber,
    status,
    dateCreated,
    dateModified,
    count,
    integrationKey
  }
}
`;

export const COUNT_ALL_USER = gql`
query CountUser {countUser}
`;

export const GET_USER_CATERGORY = gql`
query userByCompany{
  userByCompany{
      id,
      companyId,
      companyName
  }
}
`;

export const GET_USER_BY_ID = gql`
query GetUserById(
  $userId: String!, 
){
  userById(
      userId:$userId,
  ){
    id,
    email,
    fullName,
    birthDay,
    gender,
    avatar,
    avatarBase64{
        path,
        data
    },
    faceImages,
    faceImagesArrayBase64{
        id,
        userId,
        faceImageType,
        path,
        data
    },
    departmentId,
    companyId,
    integrationKey,
    phoneNumber,
    status,
    adName,
    title,
    dateCreated,
    dateModified
  }
}
`;

export const GET_USER_NAME_FILTERED = gql`
query GetFilteredUser(
  $companyId: Float!,
  $departmentId: Float!,
  $userStatus: Float!
){
  userNamesFiltered(
      companyId:$companyId,
      departmentId:$departmentId,
      userStatus:$userStatus,
  ){
      id,
      fullName
  }
}
`;

export const GET_ALL_USER_NAME = gql`
query GetAllUserName{
  userNames{
      id,
      fullName
  }
}
`;

export const GET_ALL_USER_EXPORT = gql`
query GetAllUserExport(
  $userId: String!,
  $companyId: Float!,
  $departmentId: Float!,
  $userStatus: Float!
){
usersExport(
  userId: $userId,
  companyId: $companyId,
  departmentId: $departmentId,
  userStatus: $userStatus
){
  id,
  email,
  fullName,
  avatar,
  gender,
  birthDay,
  phoneNumber,
  roles,
  department,
  company,
  integrationKey,
  faceImages,
  status,
  dateCreated,
  dateModified
}
}
`;

export const SET_DEPARTMENT_ADMIN = gql`
mutation setDepartmentAdmin
($adminId: [String!]!, 
$departmentId: [String!]!) 
{setDepartmentAdmin
    (
        adminId: $adminId,
        departmentId: $departmentId
    ){
        adminId,
        departmentId
    }
}
`;

export const GET_DEPARTMENT_ADMIN = gql`
query DepartmentAdmins
($departmentId: String!) 
{DepartmentAdmins
    (
        departmentId: $departmentId,
    ){
        departmentId,
        adminId,
        status
        user {
            id
            email
            phone
            name
            birthday
            gender
            avatar
            departmentId
            companyId
            integrationKey
            dateCreated
            dateModified
        }
    }
}
`;

export const REMOVE_DEPARTMENT_ADMIN = gql`
mutation removeDepartmentAdmin
($adminId: [String!]!, 
$departmentId: [String!]!) 
{removeDepartmentAdmin
    (
        adminId: $adminId,
        departmentId: $departmentId
    )
}
`;

export const LOCK_DEPARTMENT_ADMIN = gql`
mutation lockDepartmentAdmin
($adminId: [String!]!, 
$departmentId: [String!]!) 
{lockDepartmentAdmin
    (
        adminId: $adminId,
        departmentId: $departmentId
    ){
        adminId,
        departmentId,
        status
    }
}
`;

export const APPROVE_DEPARTMENT_ADMIN = gql`
mutation approveDepartmentAdmin
($adminId: [String!]!, 
$departmentId: [String!]!) 
{approveDepartmentAdmin
    (
        adminId: $adminId,
        departmentId: $departmentId
    ){
        adminId,
        departmentId,
        status
    }
}
`;

export const REMOVE_USER_FACE_IMAGES = gql`
mutation removeUserFaceImages
($faceImagePaths: [String!]!, 
$userId: String!)
{
  removeUserFaceImages
  (
    faceImagePaths: $faceImagePaths,
    userId: $userId
  )
}
`;

export const ADD_GUEST = gql`
mutation updateGuest(
  $email: String!, 
  $fullName: String!, 
  $birthDay: Date!,
  $phoneNumber: String!, 
  $gender: Gender!, 
  ) {
updateGuest(input : {
  email: $email,
  fullName: $fullName,
  birthDay : $birthDay,
  phoneNumber: $phoneNumber,
  gender: $gender,
}) {
    id,
    fullName,
    email,
    gender,
    birthDay
    avatar
}
} 
`;

export const WAITLIST = gql`
query getAllUserWaitting(
  $search: String!,
  $companyIds: [String!]!,
  $departmentIds: [String!]!,
  $page: Float!, 
  $perPage: Float!  
){allWaittingUser(
  search:$search,
  companyIds: $companyIds,
  departmentIds: $departmentIds,
  page: $page, 
  perPage: $perPage
){
  userId,
  count,
  User{
    id,
    email,
    fullName,
    avatar,
    gender,
    birthDay,
    phoneNumber,
    companyId,
    company{
      id,
      name
    },
    departmentId,
    department{
      id,
      name
    },
    integrationKey,
    status,
    dateCreated,
    dateModified,
    faceImages
  }
}  
}
`;

export const APPROVE_USER = gql`
mutation approveUsers(
  $userIds: [String!]!,
){
  approveUsers(
    userIds:$userIds,
  )
}
`;

export const DISAPPROVE_USER = gql`
mutation unApproveUsers(
  $userIds: [String!]!,
){
  unApproveUsers(
    userIds:$userIds,
  )
}
`;

export const EDIT_COMPANY = gql`
mutation editCompany(
  $id: String!,
  $name: String!,
){
  editCompany(
    id : $id,
    name: $name,
  ){
    id,
    name
  }
}
`;

export const DELETE_COMPANY = gql`
mutation deleteCompany(
  $companyId: String!,
){
  deleteCompany(
    companyId : $companyId,
  ){
    id,
    name
  }
}
`;


export const EDIT_DEPARTMENT = gql`
mutation editDepartment(
  $id: String!,
  $name: String!,
){
  editDepartment(
    id : $id,
    name: $name,
  ){
    id,
    name
  }
}
`;

export const DELETE_DEPARTMENT = gql`
mutation deleteDepartment(
  $departmentId: String!,
){
  deleteDepartment(
    departmentId : $departmentId,
  ){
    id,
    name
  }
}
`;

export const EXPORT_USER_BY_FILTER = gql`
mutation exportUserZipFileByFilter(
  $companyId: String, 
  $departmentId: String,
  $userId: String,
) {
exportUserZipFileByFilter(
    companyId: $companyId,
    departmentId: $departmentId,
    userId: $userId,
  )
}
`;

export const EXPORT_GENERAL_USER = gql`
mutation exportGeneralData(
  $companyIds: [String!]!, 
  $departmentIds: [String!]!,
  $userIds: [String!]!,
) {
exportGeneralData(
    companyIds: $companyIds,
    departmentIds: $departmentIds,
    userIds: $userIds,
    ){id,name,email,integrationKey,birthDay,gender,phoneNumber,companyName,departmentName,faceImageCount}
}
`;

export const FULL_DELETE_USER = gql`
mutation fullDeleteUser(
  $userIds: [String!]!,
  $password: String!
) {
  fullDeleteUser(
    userIds: $userIds,
    password: $password,
  )
} 
`;

export const LOCK_UPDATE_FACE = gql`
mutation LockUpdateFace(
  $userId: String!
  ){
  lockUpdateFace(
    userId: $userId
  )
}
`;

export const UNLOCK_UPDATE_FACE = gql`
mutation UnlockUpdateFace(
  $userId: String!
  ){
  unlockUpdateFace(
    userId: $userId
  )
}
`;

export const PASS_PASSWORD = gql`
mutation ConfirmByPass($password: String!) {
  confirmByPass(password: $password)
}
`;