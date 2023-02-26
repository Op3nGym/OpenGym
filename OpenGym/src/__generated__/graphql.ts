/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
};

export type ComparableDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type Course = {
  __typename?: 'Course';
  courseId: Scalars['Int'];
  credits: Scalars['Int'];
  enrollments: Array<Enrollment>;
  title: Scalars['String'];
};

export type CourseFilterInput = {
  and?: InputMaybe<Array<CourseFilterInput>>;
  courseId?: InputMaybe<ComparableInt32OperationFilterInput>;
  credits?: InputMaybe<ComparableInt32OperationFilterInput>;
  enrollments?: InputMaybe<ListFilterInputTypeOfEnrollmentFilterInput>;
  or?: InputMaybe<Array<CourseFilterInput>>;
  title?: InputMaybe<StringOperationFilterInput>;
};

export type CourseSortInput = {
  courseId?: InputMaybe<SortEnumType>;
  credits?: InputMaybe<SortEnumType>;
  title?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type CoursesConnection = {
  __typename?: 'CoursesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CoursesEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Course>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CoursesEdge = {
  __typename?: 'CoursesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Course;
};

export type CreateCourseInput = {
  credits: Scalars['Int'];
  title: Scalars['String'];
};

export type CreateCoursePayload = {
  __typename?: 'CreateCoursePayload';
  course: Course;
};

export type EnrollStudentInput = {
  courseId: Scalars['Int'];
  studentId: Scalars['Int'];
};

export type EnrollStudentPayload = {
  __typename?: 'EnrollStudentPayload';
  enrollment?: Maybe<Enrollment>;
  enrollmentId: Scalars['Int'];
};

export type Enrollment = {
  __typename?: 'Enrollment';
  course: Course;
  courseId: Scalars['Int'];
  enrollmentId: Scalars['Int'];
  grade?: Maybe<Grade>;
  student: Student;
  studentId: Scalars['Int'];
};

export type EnrollmentFilterInput = {
  and?: InputMaybe<Array<EnrollmentFilterInput>>;
  course?: InputMaybe<CourseFilterInput>;
  courseId?: InputMaybe<ComparableInt32OperationFilterInput>;
  enrollmentId?: InputMaybe<ComparableInt32OperationFilterInput>;
  grade?: InputMaybe<NullableOfGradeOperationFilterInput>;
  or?: InputMaybe<Array<EnrollmentFilterInput>>;
  student?: InputMaybe<StudentFilterInput>;
  studentId?: InputMaybe<ComparableInt32OperationFilterInput>;
};

export enum Grade {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F'
}

export type GradeStudentInput = {
  grade: Grade;
  studentId: Scalars['Int'];
};

export type GradeStudentPayload = {
  __typename?: 'GradeStudentPayload';
  enrollment?: Maybe<Enrollment>;
  enrollmentId: Scalars['Int'];
};

export type ListFilterInputTypeOfEnrollmentFilterInput = {
  all?: InputMaybe<EnrollmentFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<EnrollmentFilterInput>;
  some?: InputMaybe<EnrollmentFilterInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCourse: CreateCoursePayload;
  enrollStudent: EnrollStudentPayload;
  gradeStudent: GradeStudentPayload;
  registerStudent: RegisterStudentPayload;
};


export type MutationCreateCourseArgs = {
  input: CreateCourseInput;
};


export type MutationEnrollStudentArgs = {
  input: EnrollStudentInput;
};


export type MutationGradeStudentArgs = {
  input: GradeStudentInput;
};


export type MutationRegisterStudentArgs = {
  input: RegisterStudentInput;
};

export type NullableOfGradeOperationFilterInput = {
  eq?: InputMaybe<Grade>;
  in?: InputMaybe<Array<InputMaybe<Grade>>>;
  neq?: InputMaybe<Grade>;
  nin?: InputMaybe<Array<InputMaybe<Grade>>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  courseById?: Maybe<Course>;
  courses?: Maybe<CoursesConnection>;
  studentById?: Maybe<Student>;
  students?: Maybe<StudentsConnection>;
};


export type QueryCourseByIdArgs = {
  id: Scalars['Int'];
};


export type QueryCoursesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<CourseSortInput>>;
  where?: InputMaybe<CourseFilterInput>;
};


export type QueryStudentByIdArgs = {
  id: Scalars['Int'];
};


export type QueryStudentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<StudentSortInput>>;
  where?: InputMaybe<StudentFilterInput>;
};

export type RegisterStudentInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type RegisterStudentPayload = {
  __typename?: 'RegisterStudentPayload';
  student: Student;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  enrollmentDate: Scalars['DateTime'];
  enrollments: Array<Enrollment>;
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
};

export type StudentFilterInput = {
  and?: InputMaybe<Array<StudentFilterInput>>;
  enrollmentDate?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  enrollments?: InputMaybe<ListFilterInputTypeOfEnrollmentFilterInput>;
  firstName?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  lastName?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<StudentFilterInput>>;
};

export type StudentSortInput = {
  enrollmentDate?: InputMaybe<SortEnumType>;
  firstName?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  lastName?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type StudentsConnection = {
  __typename?: 'StudentsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<StudentsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Student>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StudentsEdge = {
  __typename?: 'StudentsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Student;
};

export type GetCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCoursesQuery = { __typename?: 'Query', courses?: { __typename?: 'CoursesConnection', nodes?: Array<{ __typename?: 'Course', title: string, courseId: number, credits: number }> | null } | null };


export const GetCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"credits"}}]}}]}}]}}]} as unknown as DocumentNode<GetCoursesQuery, GetCoursesQueryVariables>;