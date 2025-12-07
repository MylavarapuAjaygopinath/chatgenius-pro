-- Add policy to allow deleting messages
CREATE POLICY "Anyone can delete messages" 
ON public.messages 
FOR DELETE 
USING (true);