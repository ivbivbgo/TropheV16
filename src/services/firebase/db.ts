import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { updateEmail } from 'firebase/auth';
import { db, auth } from '../../config/firebase';
import { ProfileData } from '../../types/profile';

export const createUserProfile = async (uid: string, profile: Partial<ProfileData>) => {
  const docRef = doc(db, 'users', uid);
  await setDoc(docRef, {
    ...profile,
    createdAt: Date.now(),
    updatedAt: Date.now()
  });
};

export const getUserProfile = async (uid: string) => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() as ProfileData : null;
};

export const updateUserProfile = async (uid: string, data: Partial<ProfileData>) => {
  const docRef = doc(db, 'users', uid);
  
  // If email is being updated, update it in Firebase Auth as well
  if (data.email && auth.currentUser) {
    try {
      await updateEmail(auth.currentUser, data.email);
    } catch (error) {
      console.error('Error updating email in Auth:', error);
      throw error;
    }
  }

  await updateDoc(docRef, {
    ...data,
    updatedAt: Date.now()
  });
};