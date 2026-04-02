// TypeScript interfaces for various entities

export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export interface Roadmap {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface Resource {
    id: string;
    title: string;
    url: string;
    createdAt: string;
    updatedAt: string;
}

export interface Opportunity {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface Domain {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export interface Profile {
    id: string;
    userId: string;
    bio: string;
    createdAt: string;
    updatedAt: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface Certification {
    id: string;
    name: string;
    issuedBy: string;
    createdAt: string;
    updatedAt: string;
}

export interface PricingPlan {
    id: string;
    name: string;
    monthlyCost: number;
    yearlyCost: number;
    createdAt: string;
    updatedAt: string;
}

export interface Submission {
    id: string;
    projectId: string;
    submittedBy: string;
    createdAt: string;
    updatedAt: string;
}