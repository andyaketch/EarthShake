import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

export async function ensureMemberProfile(user) {
  const profileRef = doc(db, 'members', user.uid);
  const existingProfile = await getDoc(profileRef);
  const accountDetails = {
    uid: user.uid,
    email: user.email ?? '',
    displayName: user.displayName || user.email?.split('@')[0] || 'EarthShake member',
    photoURL: user.photoURL ?? null,
    lastSeenAt: serverTimestamp(),
  };

  if (!existingProfile.exists()) {
    await setDoc(profileRef, { ...accountDetails, createdAt: serverTimestamp() });
  } else {
    await updateDoc(profileRef, accountDetails);
  }
  const savedProfile = await getDoc(profileRef);
  return savedProfile.data();
}
