// frontend/src/components/messages/MessageInput.jsx

import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const [file, setFile] = useState(null); // 添加 file 状态
	const { loading, sendMessage } = useSendMessage();

	const filterMessage = async (message) => {
		try {
			const response = await fetch('http://localhost:5003/filter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ message })
			});
			const data = await response.json();
			return data.filteredMessage;
		} catch (error) {
			console.error('Error filtering message:', error);
			return message;
		}
	};

	const convertMessage = async (message) => {
		try {
			const response = await fetch('http://localhost:5004/convert', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ message })
			});
			const data = await response.json();
			return data.convertedMessage;
		} catch (error) {
			console.error('Error converting message:', error);
			return message;
		}
	};

	const handleSubmitMessage = async (e) => {
		e.preventDefault();
		if (!message) return;

		const filteredMessage = await filterMessage(message);
		const convertedMessage = await convertMessage(filteredMessage);
		await sendMessage(convertedMessage);
		setMessage("");
	};

	const handleSubmitFile = async (e) => {
		e.preventDefault();
		if (!file) return;

		await uploadFile();
		setFile(null); // 重置 file 状态
	};

	const uploadFile = async () => {
		if (!file) return;

		const formData = new FormData();
		formData.append('file', file);

		try {
			const response = await fetch('http://localhost:5002/upload', {
				method: 'POST',
				body: formData
			});
			const data = await response.json();
			console.log('File uploaded:', data);

			// 在这里发送文件信息到消息服务，使用完整的URL
			await sendMessage(`File uploaded: http://localhost:5002/${data.filePath}`);
		} catch (error) {
			console.error('Error uploading file:', error);
		}
	};

	return (
		<div className='px-4 my-3'>
			{/* 消息输入 */}
			<form className='w-full relative flex items-center mb-2' onSubmit={handleSubmitMessage}>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className={`ml-2 p-2 bg-blue-500 text-white rounded ${loading ? 'cursor-not-allowed' : ''}`} disabled={loading}>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</button>
			</form>

			{/* 文件上传 */}
			<form className='w-full relative flex items-center' onSubmit={handleSubmitFile}>
				<input
					type='file'
					accept='image/*' // 限制只能上传图片
					className='text-sm text-gray-700 bg-gray-600 rounded-lg mr-2'
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<button type='submit' className={`p-2 bg-blue-500 text-white rounded ${loading ? 'cursor-not-allowed' : ''}`} disabled={loading || !file}>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</button>
			</form>
		</div>
	);
};

export default MessageInput;
